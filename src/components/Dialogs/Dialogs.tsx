import { Field, Form, Formik } from "formik";

import styles from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { DialogsTypes, MessagesType } from "../../redux/dialogs/types";

type PropsType = {
    dialogs: DialogsTypes[]
    messages: MessagesType[]
    onAddNewMessage: (newMessageText: string) => void
}


const Dialogs = (props: PropsType) => {

  let dialogsElements = props.dialogs
    .map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
  let messagesElements = props.messages
    .map((m, index) => <Message className={index % 2 ? styles.rightMessage : styles.leftMessage} message={m.message}
                                key={m.id}/>);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
        <AddMessageForm onAddNewMessage={props.onAddNewMessage}/>
      </div>
    </div>
  );
}

type Data = {
    newMessageText: string,
}

const AddMessageForm = (props: Pick<PropsType, 'onAddNewMessage'>) => {
  const onSubmit = (data: Data, { resetForm }: any): void | Promise<any> => {
    if (data.newMessageText.length < 1) return;

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
