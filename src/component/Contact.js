

 
import React from 'react';

function Contact() {
  const linkedin = (
    <a
      href='www.linkedin.com/in/charity-nelima'
      target='_blank'
      rel='noopener noreferrer'
    >
      LinkedIn
    </a>
  );
  const email = <a href='mailto: charity.nelima@student.moringaschool.com'>Email Me</a>;
  const blog = (
    <a
      href=''
      target='_blank'
      rel='noopener noreferrer'
    >
      Blog
    </a>
  );
  return (
    // <Route exact path={'/contact'}>
    <div className='contact'>
      <ul className='links'>{email}</ul>
      <ul className='links'>{linkedin}</ul>
      <ul className='links'>{blog}</ul>
    </div>
    // </Route>
  );
}

export default Contact;