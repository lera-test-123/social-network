import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { FilterType } from "../../redux/users/type";

const SignupSchema = Yup.object().shape({

});

export type UsersSearchFormType = {
   term: string;
   friend: null | boolean;
}

export type PropsType = {
    onSubmit: (values: UsersSearchFormType) => void;
    filter: FilterType
}

const UsersSearchForm = (props: PropsType) => {

    return <div>
        <Formik
            enableReinitialize={true}
            initialValues={{
                term: props.filter.term,
                friend: props.filter.friend
            }}
            validationSchema={SignupSchema}
            onSubmit={props.onSubmit}
        >
            <Form>
                <Field type='text' name='term'/>
                <Field name="friend" as="select">
                    <option value="null">All</option>
                    <option value="true">Only followed</option>
                    <option value="false">Only unfollowed</option>
                </Field>
                <button type='submit'>Search</button>
            </Form>
        </Formik>
    </div>
}

export default UsersSearchForm;