import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Slider,
    Select,
    InputNumber,
    Upload,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { message, Col, Row } from 'antd';



const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
const NumOutput = () => {
    const [inputValue, setInputValue] = useState(1);
    const onChange = (newValue) => {
        setInputValue(newValue);
    };
    return (
        <Row>
            <Col span={20}>
                <Slider
                    min={1}
                    max={10}
                    onChange={onChange}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={1}
                    max={10}
                    style={{
                        margin: '0 16px',
                    }}
                    value={inputValue}
                    onChange={onChange}
                />
            </Col>
        </Row>
    );
};
const InferenceSteps = () => {
    const [inputValue, setInputValue] = useState(1);
    const onChange = (newValue) => {
        setInputValue(newValue);
    };
    return (
        <Row>
            <Col span={20}>
                <Slider
                    min={1}
                    max={500}
                    onChange={onChange}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={1}
                    max={500}
                    style={{
                        margin: '0 16px',
                    }}
                    value={inputValue}
                    onChange={onChange}
                />
            </Col>
        </Row>
    );
};
const DecimalStep = () => {
    const [inputValue, setInputValue] = useState(0);
    const onChange = (value) => {
        if (isNaN(value)) {
            return;
        }
        setInputValue(value);
    };
    return (
        <Row>
            <Col span={20}>
                <Slider
                    min={1}
                    max={20}
                    onChange={onChange}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                    step={0.01}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={1}
                    max={20}
                    style={{
                        margin: '0 16px',
                    }}
                    step={0.01}
                    value={inputValue}
                    onChange={onChange}
                />
            </Col>
        </Row>
    );
};
const FormDisabledDemo = () => {


    const [componentDisabled, setComponentDisabled] = useState(false);
    const onFormLayoutChange = ({ disabled }) => {
        setComponentDisabled(disabled);
    };
    const onFinish=(e)=>{
        console.log(e);
    }
    return (
        <div>
            <div style={{ display: "inline-block", width: "50%" }}>
                <h3 style={{ textAlign: "center" }}>Input</h3>
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                    onValuesChange={onFormLayoutChange}
                    disabled={componentDisabled}
                    onFinish={onFinish}
                >
                    <Form.Item label="Prompt" name="prompt">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Negative_Prompt" name="negative_prompt">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Width"  name="width" >
                        <Select>
                        <Select.Option value="128">128</Select.Option>
                            <Select.Option value="256">256</Select.Option>
                            <Select.Option value="384">384</Select.Option>
                            <Select.Option value="448">448</Select.Option>
                            <Select.Option value="512">512</Select.Option>
                            <Select.Option value="576">576</Select.Option>
                            <Select.Option value="640">640</Select.Option>
                            <Select.Option value="704">704</Select.Option>
                            <Select.Option value="768">768</Select.Option>
                            <Select.Option value="832">832</Select.Option>
                            <Select.Option value="896">896</Select.Option>
                            <Select.Option value="960">960</Select.Option>
                            <Select.Option value="1024">1024</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Height"  name="height">
                        <Select>
                            <Select.Option value="128">128</Select.Option>
                            <Select.Option value="256">256</Select.Option>
                            <Select.Option value="384">384</Select.Option>
                            <Select.Option value="448">448</Select.Option>
                            <Select.Option value="512">512</Select.Option>
                            <Select.Option value="576">576</Select.Option>
                            <Select.Option value="640">640</Select.Option>
                            <Select.Option value="704">704</Select.Option>
                            <Select.Option value="768">768</Select.Option>
                            <Select.Option value="832">832</Select.Option>
                            <Select.Option value="896">896</Select.Option>
                            <Select.Option value="960">960</Select.Option>
                            <Select.Option value="1024">1024</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="init_image" name="init_image" >

                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item label="Mask" name="mask">

                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item label="Prompt_Strength"  name="prompt_strength">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="num_outputs"  name="num_outputs">
                    <NumOutput />
                     </Form.Item>
                    <Form.Item label="num_inference_steps"  name="num_interference_steps">
                    <InferenceSteps/>
                    </Form.Item>
                    <Form.Item label="guidance_scale"  name="guidance_scale">
                    <DecimalStep />
                    </Form.Item>
                    <Form.Item label="Scheduler"  name="scheduler">
                        <Select>
                            <Select.Option value="DDIM">DDIM</Select.Option>
                            <Select.Option value="K-LMS">K-LMS</Select.Option>
                            <Select.Option value="PNDM">PNDM</Select.Option>
                            <Select.Option value="K_EURAL">K_EULER</Select.Option>
                            <Select.Option value="K_EURAL_ANCESTRAl">K_EURAL_ANCESTRAL</Select.Option>
                            
                        </Select>
                    </Form.Item>
                    <Form.Item label="Seed"  name="seed">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item >
                        <Button type='primary' htmlType='submit' className='submit_button'>Submit</Button>
                        <Button>Reset</Button>

                    </Form.Item>
                </Form>
            </div>
            <div style={{ display: "inline-block", width: "50%", height: "auto", margin: "0 auto" }}>
                <h3 style={{  }}>Output</h3>
                <img style={{ textAlign: "center" }} src="https://replicate.delivery/pbxt/SLiYRfqRar1kE6ezc0LzfJ2eRmmM5e2LqV1dmh0L0HvCiZsAC/out-0.png"></img>

            </div>
        </div >
    );
};
export default () => <FormDisabledDemo />;