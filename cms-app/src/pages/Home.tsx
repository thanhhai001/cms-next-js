"use client"

import { FormRegister, useFormCore } from "@modules/core"
import { Button, Form, Modal } from "antd"
import { useEffect } from "react"

export default function Home() {
  const { form, formValues, open, setOpen, onSubmited } = useFormCore()

  useEffect(() => {
    console.log(formValues);
  }, [formValues])
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        New Collection
      </Button>
      <Modal
        open={open}
        title="Register"
        okText="Create"
        cancelText="Cancel"
        onOk={() => form.submit()}
        onCancel={() => setOpen(false)}
        destroyOnClose
      >
        <FormRegister
          layout="vertical"
          name="Register"
          form={form}
          clearOnDestroy
          onFinish={onSubmited}
        />
      </Modal>

    </>
  )
}