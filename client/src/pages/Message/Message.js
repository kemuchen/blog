import React, { Component, Suspense } from 'react';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import { Comment, Avatar, Form, Button, List, Input, Card, Icon, Tooltip } from 'antd';
import { connect } from 'dva';
import style from './Message.less';
import PageLoading from '@/components/PageLoading';

const { Meta } = Card;

import moment from 'moment';

const TextArea = Input.TextArea;

const Editor = ({
    onChange, onSubmit, submitting, value,
}) => (
        <div>
            <Form.Item>
                <TextArea rows={4} onChange={onChange} value={value} />
            </Form.Item>
            <Form.Item>
                <Button
                    htmlType="submit"
                    loading={submitting}
                    onClick={onSubmit}
                    type="primary"
                >
                    提交
    </Button>
            </Form.Item>
        </div>
    );

const ExampleComment = ({ children, comment }) => (
    <Comment
        author={<a>{comment.name}</a>}
        avatar={(
            <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                title={comment.name}
            />
        )}
        content={<p>{comment.content}</p>}
    >
        {children}
    </Comment>
);

class Message extends Component {
    state = {
        submitting: false,
        value: '',
    }

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    {
                        author: 'Han Solo',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        content: <p>{this.state.value}</p>,
                        datetime: moment().fromNow(),
                    },
                    ...this.state.comments,
                ],
            });
        }, 1000);
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    }

    render() {



        const { comments, submitting, value } = this.state;
        return (
            <GridContent>
                <Card>
                    <div>
                        <Comment
                            content={(
                                <Editor
                                    onChange={this.handleChange}
                                    onSubmit={this.handleSubmit}
                                    submitting={submitting}
                                    value={value}
                                />
                            )}
                        />
                    </div>
                </Card>
                <Card>
                    <ExampleComment comment={{ name: '张三', content: '你好！这是我第一个留言的。' }}>
                        <ExampleComment comment={{ name: '站长回复', content: '你好，欢迎您访问我的网站' }}>
                        </ExampleComment>
                    </ExampleComment>
                    <ExampleComment comment={{ name: '李四', content: '你好！这是我第一个留言的。' }}>
                        <ExampleComment comment={{ name: '站长回复', content: '你好，欢迎您访问我的网站' }}>
                        </ExampleComment>
                    </ExampleComment>
                </Card>
            </GridContent>
        );
    }
}

export default Message;