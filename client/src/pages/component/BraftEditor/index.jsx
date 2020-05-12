import React, { Component } from 'react';
import { Card, Row, Col, Empty } from 'antd';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import styles from './index.less';
import { GridContent } from '@ant-design/pro-layout';

/**
 * 富文本编辑器
 * 使用说明：1、使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorState
 * 使用说明：2、编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
 */
class BraftEditorPage extends Component {
  state = {
    // 创建一个空的editorState作为初始值
    editorState: BraftEditor.createEditorState(null),
  };

  handleEditorChange = editorState => {
    this.setState({ editorState });
  };

    //5.由于图片上传、视频上传项目中都是单独走的接口，需要一个上传的方法
    UploadFn = (param) => {
        const serverURL = upload;//upload 是接口地址
        const xhr = new XMLHttpRequest();
        const fd = new FormData();

        const successFn = (response) => {
            // 假设服务端直接返回文件上传后的地址
            // 上传成功后调用param.success并传入上传后的文件地址
            const upLoadObject = JSON.parse(response && response.currentTarget && response.currentTarget.response);
            param.success({
                url: JSON.parse(xhr.responseText).data.fileUrl,
                meta: {
                    id: upLoadObject && upLoadObject.id,
                    title: upLoadObject && upLoadObject.fileName,
                    alt: upLoadObject && upLoadObject.fileName,
                    loop: false, // 指定音视频是否循环播放
                    autoPlay: false, // 指定音视频是否自动播放
                    controls: false, // 指定音视频是否显示控制栏
                    poster: '', // 指定视频播放器的封面
                }
            })
        };

        const progressFn = (event) => {
        // 上传进度发生变化时调用param.progress
        param.progress(event.loaded / event.total * 100)

        };

        const errorFn = (response) => {
            // 上传发生错误时调用param.error
            param.error({
                msg: 'unable to upload.'
            })
        };

        xhr.upload.addEventListener("progress", progressFn, false);
        xhr.addEventListener("load", successFn, false);
        xhr.addEventListener("error", errorFn, false);
        xhr.addEventListener("abort", errorFn, false);

        fd.append('file', param.file);
        xhr.open('POST', serverURL, true);
        xhr.setRequestHeader("X-Auth-Token", User.getToken());//header中token的设置
        xhr.send(fd)

    };

  render() {
    const { editorState } = this.state;
    const excludeControls = [
      'letter-spacing',
      'line-height',
      'clear',
      'headings',
      'list-ol',
      'list-ul',
      'remove-styles',
      'superscript',
      'subscript',
      'hr',
      'text-align',
      'blockquote',
      'code',
      'text-indent',
      'strike-through',
      'redo',
    ];
    return (
        <GridContent>
            <Card>
                <Row gutter={24}>
                <Col span={12}>
                    <div style={{ border: '1px solid #00000033' }}>
                    <BraftEditor
                        value={editorState}
                        onChange={this.handleEditorChange}
                        excludeControls={excludeControls}
                        media={{uploadFn: this.UploadFn}}
                    />
                    </div>
                </Col>
                <Col span={12}>
                    <Card title="实时预览" type="inner" style={{ border: '1px solid #00000033' }}>
                    {editorState.toHTML() === '<p></p>' ? (
                        <Empty />
                    ) : (
                        <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html: editorState.toHTML() }}
                        />
                    )}
                    </Card>
                </Col>
                </Row>
            </Card>
      </GridContent>
    );
  }
}

export default BraftEditorPage;
