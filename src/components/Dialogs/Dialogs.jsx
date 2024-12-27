import { Field, Form, Formik } from "formik";

import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsElements = props.dialogs
    .map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
  let messagesElements = props.messages
    .map((m, index) => <Message className={index % 2 ? s.rightMessage : s.leftMessage} message={m.message}
                                key={m.id}/>);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <AddMessageForm onAddNewMessage={props.onAddNewMessage}/>
      </div>

    </div>
  );
}

const AddMessageForm = (props) => {
  const onSubmit = (data, { resetForm }) => {
    if (data.newMessageText.length < 1) return null
    props.onAddNewMessage(data.newMessageText);
    resetForm();
  };

  return <div>
    <Formik
      initialValues={{
        newMessageText: ''
    }}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
            <Field as='textarea'
                   name='newMessageText'
                   placeholder='Enter your message here'
                   rows='6'
                   cols='40'
            />
          <button type='submit'>Send</button>
        </div>
      </Form>
    </Formik>
  </div>
}

export default Dialogs;
