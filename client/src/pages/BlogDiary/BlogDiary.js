import React, { Component, Suspense } from 'react';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import { Row, Col, Icon, Menu, Dropdown, Form, Carousel, Card, Tabs, List, Avatar, Button } from 'antd';
import { connect } from 'dva';
import style from './BlogDiary.less';
import PageLoading from '@/components/PageLoading';

import lm01 from '../../images/lm01.jpg';

const { Meta } = Card;
const TabPane = Tabs.TabPane;

@connect(({ diary, loading }) => ({
	diary,
	loading: loading.effects['diary/fetch'],
}))
class BlogDiary extends Component {
	componentDidMount(currentPage) {
		if (currentPage == undefined || currentPage == null) {
			var currentPage = 1
		}
		const { dispatch } = this.props;
		this.reqRef = requestAnimationFrame(() => {
			dispatch({
				type: 'diary/fetch',
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
		const { diary, loading } = this.props;
		console.log(this.props)
		const {
			articleList,
			total
		} = diary;

		return (
			<GridContent>
				<Row gutter={18}>
					<Col xl={18} lg={12} md={12} sm={12} xs={12}>
						<Card hoverable>
							<Meta
								avatar={<Avatar style={{ width: 130, height: 110, borderRadius: 0 }} src={lm01} />}
								title={<h2>{"个人博客日记"}</h2>}
								description="个人博客日记，记录一些优秀个人站长是如何制作个人博客，建个人博客、以及经营个人网站的，本站还会推荐一些优秀的个人博客站长网站。"
							/>
						</Card>

						<Card className={style.marginTop}>
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
												actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />,
												<IconText type="message" text="2" />, <Button type="primary">阅读更多</Button>]}
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
								<TabPane tab="点击排行" key="1">Content of Tab Pane 1</TabPane>
							</Tabs>
						</Card>
						<Card className={style.marginTop}>
							<Tabs defaultActiveKey="1">
								<TabPane tab="本栏推荐" key="1">Content of Tab Pane 1</TabPane>
							</Tabs>
						</Card>
						<Card className={style.marginTop}>
							<Tabs defaultActiveKey="1">
								<TabPane tab="点击排行" key="1">Content of Tab Pane 1</TabPane>
							</Tabs>
						</Card>
					</Col>
				</Row>
			</GridContent>
		);
	}
}

export default BlogDiary;