import React, { Component } from 'react';
import { Input } from 'antd';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { Checkbox } from 'antd';
import { Select, Slider, InputNumber, Pagination, Divider } from 'antd';
import { List, Tag } from 'antd';

import logo from './logo.svg';

import './App.css';

const { Header, Footer, Content } = Layout;
const Search = Input.Search;
const Option = Select.Option;
const { TextArea } = Input;
const marks = {
  1: '1',
  40: '40+'
};
const data = [
  {
    title: 'Senior Ruby on Rails enginner',
    description: 'Lorem ipsum dolor sit amet,',
    rate: '$60/hr'
  },
  {
    title: 'Senior product designer',
    description: 'Lorem ipsum dolor sit amet,',
    rate: '$45/hr'
  },

];

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}


class App extends Component {
  state = {
    response: '',
    inputValue: 1,
  };
  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  }
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  

  render() {
    return (
      <div className="App" style={{ backgroundColor: '#f0f2f5'}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <p className="App-intro">{this.state.response}</p>
        <Layout>
        <Header>
        <Search
          placeholder="Search by keywords (PHP, .NET, graphic design, etc. )"
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}
        />
        </Header>
        </Layout>
        <div className="gutter-example">
          <Row gutter={16}>          
            <Col className="gutter-row" span={6}>
            <div className="gutter-box">
            <div style={{ textAlign: 'left', marginLeft: 30 }}>
              <h4>FILTERS</h4>
              <Divider />      
            </div>
            <div style={{ textAlign: 'left', marginLeft: 30 }}>
              <h3>Skills</h3>
              <TextArea rows={2} />              
            </div>
              <div>
              <Checkbox.Group style={{ width: '100%', textAlign: 'left', marginLeft: '30px' }} onChange={onChange}>
              <Row>
                <Col span={16}><h4>Availability</h4></Col>
              </Row>
              <Row>
                <Col span={16}><Checkbox value="hour">Hourly</Checkbox></Col>
              </Row>
              <Row>
                <Col span={16}><Checkbox value="20hrs">Part-time (20 hrs/wk)</Checkbox></Col>
              </Row>
              <Row>
                <Col span={16}><Checkbox value="40hrs">Full-time (40 hrs/wk)</Checkbox></Col>
              </Row>
              </Checkbox.Group>
              </div> 
              <div style={{ textAlign: 'left', marginLeft: 30}} >
              <h4>Job type</h4>
              <Select defaultValue="jobSelection" style={{ width: 300 }} onChange={handleChange}>
              <Option value="jobSelection">Select a job type</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
              </Select>
              </div>
              <div style={{ textAlign: 'left', marginLeft: 30}} >
                <h4>Pay rate / hr ($)</h4>
                <Row>
                <Col span={4}>
                <InputNumber
                  min={1}
                  max={40}
                  style={{ marginLeft: 5 }}
                  value={this.state.inputValue}
                  onChange={this.onChange}
                  />
                </Col>
                <Col span={4} offset={6}>
                <InputNumber
                  min={1}
                  max={40}
                  value={this.state.inputValue}
                  onChange={this.onChange}
                  />
                </Col>
                <Col span={24}>
                <Slider min={1} max={40} marks={marks} defaultValue={[18, 32]} onChange={this.onChange} value={this.state.inputValue} />
                </Col>
                </Row>
              </div>
              
              <div style={{ textAlign: 'left', marginLeft: 30}} >
              <h4>Experience Level</h4>
              <Select defaultValue="experience" style={{ width: 300 }} onChange={handleChange}>
              <Option value="experience">Select your experience level</Option>
              <Option value="junior">Junior</Option>
              <Option value="Secior">Senior</Option>
              </Select>
              </div>
            </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div className="gutter-box">
              <Layout>
              <Content style={{ background: 'white',  textAlign: 'left' }}>
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <List.Item style={{ marginLeft: 20 }}>
                  <List.Item.Meta
                   title={<a href="https://ant.design">{item.title}</a>}
                   description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
                  )}
                />
              </Content>
              <Footer>
              <Pagination size="small" defaultCurrent={1} total={240} />
              </Footer>
              </Layout>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">
                <div>
                  <h4>TOP JOBS</h4>
                  <Divider />
                  <h4>MOST VIEWED THIS WEEK</h4>
                  <Divider />  
                </div>
              </div>
           </Col>
          </Row>
        </div>       
      </div>
      
      
    );
  }
}

export default App;