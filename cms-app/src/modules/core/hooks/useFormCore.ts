"use client"

import { Form } from "antd";
import { useState } from "react";

export function useFormCore() {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({});
  const onSubmited = (values: any) => setFormValues(values);


  return {
    form,
    formValues,
    open,
    setOpen,
    onSubmited
  }
}



