import clsx from "clsx"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
export default function LoginPage() {
    const formStyle = clsx(
        "w-full md:w-[450px]",
        "flex flex-col gap-3 py-4 px-5 rounded-lg shadow border",
        "dark:bg-black/50"
    )
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email").required("Email is Required"),
        password: Yup.string().required("Password is Required"),
    })

    return (
        <div className="w-full h-full flex justify-center items-center p-4 md:p-0">
            <div className={formStyle}>
                <Formik validationSchema={validationSchema} initialValues={{ email: "", password: "", rememberMe: false }} onSubmit={() => { }}>
                    <Form className="flex flex-col gap-4 w-full">
                        <h1 className="text-2xl font-bold text-center">Welcome Back , Please Login</h1>
                        <div className="flex flex-col gap-2">
                            <label>
                                <p className="text-sm mb-2">Email</p>
                                <Field className="input w-full" name="email" type="email" placeholder="Enter you email" />
                            </label>
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>
                                <p className="text-sm mb-2">Password</p>
                                <Field className="input w-full" name="password" type="password" placeholder="Enter you password" />
                            </label>
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                        </div>
                        <label className="flex items-center gap-2">
                            <Field type="checkbox" className="checkbox checkbox-primary" name="rememberMe" />
                            <span>Remember me</span>
                        </label>
                        <button className="btn btn-primary" type="submit">Login</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
