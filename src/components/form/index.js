import React from 'react';
import Input from '../input';
import SignatureCanvas from 'react-signature-canvas';

const Form = () => {
  return (
    <form
      id="contact-form"
      action="https://rebbeisalive-default-rtdb.europe-west1.firebasedatabase.app.json/"
      method="post"
    >
      <Input
        type={'text'}
        id={'name'}
        name={'name'}
        placeholder={'שם'}
        required={true}
      />
      <Input
        type={'email'}
        id={'email'}
        name={'email'}
        placeholder={'מייל'}
        required={true}
      />
      <p> חתום כאן </p>
      <SignatureCanvas
        backgroundColor="rgba(255,255,255)"
        penColor="yellow"
        canvasProps={{
          width: 200,
          height: 200,
          className: 'sigCanvas',
        }}
      />

      <button type={'submit'}>שלח לגאולה</button>
    </form>
  );
};

export default Form;
