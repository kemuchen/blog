import React, { Component, Suspense } from 'react';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import { Row, Col, Icon, Menu, Dropdown, Form, Carousel, Card, Tabs, List, Avatar, Button } from 'antd';
import { connect } from 'dva';
import PageLoading from '@/components/PageLoading';
import style from './Home.less';

import iamge1 from '../../images/1.jpg';
import iamge2 from '../../images/2.jpg';
import iamge4 from '../../images/4.jpg';

import h1 from '../../images/h1.jpg';
import h2 from '../../images/h2.jpg';


const TabPane = Tabs.TabPane;

@connect(({ home, loading }) => ({
  home,
  loading: loading.effects['home/fetch'],
}))
class Home extends Component {
  componentDidMount(currentPage) {
    if (currentPage == undefined || currentPage == null) {
      var currentPage = 1
    }
    const { dispatch } = this.props;
    this.reqRef = requestAnimationFrame(() => {
      dispatch({
        type: 'home/fetch',
        param: { 'currentPage': currentPage }
      });
    });
  }

  render() {
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
    const { home, loading } = this.props;
    const {
      carousel,
      articleList,
      total
    } = home;


    const data = [
      {type: 'home', color: '#ef5509'},
      {type: 'weibo', color: '#FF991A'},
      {type: 'qq', color: '#1296DB'},
      {type: 'wechat', color: '#07AF12'},
    ]
    return (
      <GridContent>
        <Row gutter={18}>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <Carousel autoplay="true">
              <a><img width={620} height={260} src={iamge1}></img></a>
              <a><img width={620} height={260} src={iamge2}></img></a>
              <a><img width={620} height={260} src={iamge4}></img></a>
            </Carousel>
          </Col>
          <Col xl={6} lg={6} md={6} sm={6} xs={6}>
            <div><a><img width={270} height={125} src={h1} /></a></div>
            <div className={style.marginTop}><a><img width={270} height={125} src={h2} /></a></div>
          </Col>
          <Col xl={6} lg={6} md={6} sm={6} xs={6}>
            <Card className={style.myCard}>
              <h2 style={{ color: 'white' }}>慕辰</h2>
              <h4 style={{ color: 'white' }}>&emsp;网名：muchen</h4>
              <h4 style={{ color: 'white' }}>&emsp;职业：嘿嘿</h4>
              <h4 style={{ color: 'white' }}>&emsp;现居：222222</h4>
              <h4 style={{ color: 'white' }}>&emsp;email：222222</h4>
              <List style={{marginTop: 20}} grid={{
                  gutter: 16, xs: 4, sm: 4, md: 4, lg: 4, xl: 4, xxl: 4,
                }} 
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <Icon style={{fontSize: 25, color: item.color, alignItems: 'center', alignContent: 'center'}} type={item.type} />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={16} className={style.marginTop}>
          <Col xl={18} lg={18} md={18} sm={18} xs={18}>
            <Card>
              <Tabs defaultActiveKey="1">
                <TabPane tab="个人博客日记" key="1">
                  <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                      onChange: (page) => {
                        this.componentDidMount(page);
                      },
                      pageSize: 3,
                      total: total,
                      showQuickJumper: true
                    }}
                    dataSource={articleList}
                    renderItem={item => (
                      <List.Item
                        extra={<img width={272} alt="logo" src={item.img} />}
                        key={item.title}
                        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />, <Button type="primary">阅读更多</Button>]}
                      >
                        <List.Item.Meta
                          title={<a href={item.href}>{item.title}</a>}
                        />
                        {item.content}
                      </List.Item>
                    )}
                  />
                </TabPane>
                <TabPane tab="推荐工具" key="2">
                  <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                      onChange: (page) => {
                        this.componentDidMount(page);
                      },
                      pageSize: 3,
                      total: total
                    }}
                    dataSource={articleList}
                    renderItem={item => (
                      <List.Item
                        extra={<img width={272} alt="logo" src={iamge2} />}
                        key={item.title}
                        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />, <Button type="primary">阅读更多</Button>]}
                      >
                        <List.Item.Meta
                          title={<a href={item.href}>{item.title}</a>}
                        />
                        {item.content}
                      </List.Item>
                    )}
                  />
                </TabPane>
                <TabPane tab="设计心得" key="3">
                  <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                      onChange: (page) => {
                        this.componentDidMount(page);
                      },
                      pageSize: 3,
                      total: total
                    }}
                    dataSource={articleList}
                    renderItem={item => (
                      <List.Item
                        extra={<img width={272} alt="logo" src={iamge4} />}
                        key={item.title}
                        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />, <Button type="primary">阅读更多</Button>]}
                      >
                        <List.Item.Meta
                          title={<a href={item.href}>{item.title}</a>}
                        />
                        {item.content}
                      </List.Item>
                    )}
                  />
                </TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col xl={6} lg={6} md={6} sm={6} xs={6}>
            <Card>
              <Tabs defaultActiveKey="1">
                <TabPane tab="最近更新" key="1">Content of Tab Pane 1</TabPane>
              </Tabs>
            </Card>
            <Card className={style.marginTop}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="点击排行" key="1">Content of Tab Pane 1</TabPane>
              </Tabs>
            </Card>
            <Card className={style.marginTop}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="站长推荐" key="1">Content of Tab Pane 1</TabPane>
              </Tabs>
            </Card>
            <Card className={style.marginTop}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="站点信息" key="1">Content of Tab Pane 1</TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>

      </GridContent>
    );
  }
}

export default Home; 