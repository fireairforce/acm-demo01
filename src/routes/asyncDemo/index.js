import React, { Component } from 'react'
import { connect } from 'dva'
import './index.less'
import 'antd/dist/antd.css'
import { Tabs, Button, Input, Form, Rate, Row, Col, message ,Cascader,RadioGroup,Radio} from 'antd'
import QueueAnim from 'rc-queue-anim'
import verify from '../../Verify'
import Options from '../../utils/Options'

const {TextArea} = Input
const FormItem = Form.Item
const TabPane = Tabs.TabPane
const StudentSex=[{
  value:'男',
  label:"男",
},
{
   value:'女',
   label:'女',
}
]

@Form.create()
class FormPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    this.setState({loading: true})
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) { console.log(err) }
      else {
        const body = {
          ...values,
          // department: values.major[0],
          // major: values.major[1]
        }
        // 处理发送的数据
        fetch('', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }).then((res) => {
          return res.json()
        }).then((json) => {
          // 也可以直接对返回的res数据操作,看后端给的啥数据格式
          message.success('提交成功')
          this.props.history.push('./success')
          this.setState({submitted: true})
        }).catch((e) => {
          console.log(e.message)
        })
      }
    })
    setTimeout(() => {
      this.setState({loading: false})
    }, 1000)
  }

  handleReset (e) {
    e.preventDefault()
    this.setState({loading: false})
    this.props.form.resetFields()
  }

  render () {
    const {getFieldDecorator} = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 6}
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 12}
      }
    }
    return (
      <QueueAnim
      component='Form'
      type='top'
      className='main-content'
      delay={300}
      duration={600}
    >
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="报名表内容" key="1">

    <FormItem
          label='姓名'
          {...formItemLayout}
          key='form-content-leader-name'
          hasFeedbacky
        >
          {getFieldDecorator('studentName', {
            rules: [{
              pattern: verify.teamname2, message: '输入包含非中文字符！'
            }, {
              required: true, message: '请输入姓名'
            }]
          })(
            <Input className='form-content-input' />
          )}
        </FormItem>

        <FormItem
            label='性别'
            {...formItemLayout}
          >
            {getFieldDecorator('studentSex', {
              rules: [{
                required: true, message: '请选择性别'
              }]
            })(
              <Cascader options={StudentSex} placeholder="请选择性别" className='form-content-input'/>
            )}
          </FormItem>

        <FormItem
            label='学号'
            {...formItemLayout}
            key="studentId"
            hasFeedback
          >
            {getFieldDecorator('studentId', {
              rules: [{
                pattern: verify.studentId, message: '输入的不是有效的学号！'
              }, 
              {
                required: true, message: '请输入队长学号'
              }]
            })
            (
              <Input className='form-content-input'/>,
            )}
          </FormItem>

            <FormItem
            label='学院'
            {...formItemLayout}
          >
            {getFieldDecorator('studentCollege', {
              rules: [{
                required: true, message: '请选择学院'
              }]
            })(
              <Cascader options={Options} placeholder="请选择学院" className='form-content-input'/>
            )}
          </FormItem> 

        <FormItem
            label='手机号'
            {...formItemLayout}
            key="form-content-mobile1"
            hasFeedback
          >
            {getFieldDecorator('captainPhone', {
              rules: [{
                pattern: verify.mobile, message: '输入的不是有效的手机号码！'
              }, {
                required: true, message: '请输入手机号码'
              }]
            })(
              <Input className='form-content-input'/>,
            )}
          </FormItem>

             <FormItem
            label='QQ号'
            {...formItemLayout}
            key="form-content-mobile1"
            hasFeedback
          >
            {getFieldDecorator('studentPhone', {
              rules: [{
                pattern: verify.qq, message: '输入的不是有效的手机号码！'
              }, {
                required: true, message: '请输入QQ号'
              }]
            })(
              <Input className='form-content-input'/>,
            )}
          </FormItem>
      
          </TabPane>
        </Tabs>



        <FormItem
          key='form-content-footer'
          onSubmit={this.handleSubmit}
        >
          <Row gutter={16} type='flex'>
            <Col className='left-content' xs={{span: 24}} sm={{span: 12, offset: 6}}>
              <Button
                type='primary'
                htmlType='submit'
                className='form-button'
                loading={this.state.loading}
                disabled={this.state.submitted}
              >
                {this.state.submitted ? '提交成功' : '点击提交'}
              </Button>
              <Button
                type='ghost'
                onClick={this.handleReset}
                className='form-button'
                style={{marginLeft: 18}}
              >
              重置
              </Button>
            </Col>
          </Row>
        </FormItem>
      </Form>
    </QueueAnim>
    )
  }
}

export default connect(({app}) => ({app}))(FormPage)
