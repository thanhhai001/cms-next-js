"use client"

import { Button, Col, Flex, Form, FormProps, Input, Row } from "antd";
import { useEffect } from "react";

export function FormRegister({ ...props }: FormProps) {
  return (
    <>
      <Form {...props}>
        <Row gutter={[8, 8]} justify={"center"} align="middle" wrap>
          <Col span={12}>
            <Form.Item label="First name" name={['name', 'first']}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Last name" name={['name', 'last']}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Name (VN)" name={['translations', 0, 'name']}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Name (EN)" name={['translations', 1, 'name']}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Name (JA)" name={['translations', 2, 'name']}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}
