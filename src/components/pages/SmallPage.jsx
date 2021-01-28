import React from 'react';
import Page from './Page.jsx';
import Wrapper from './Wrapper.jsx';
import Collapse from '../Collapse.jsx';
import SignUpDialog from '../composition/SignUpDialog.jsx';
import ModalComponent from '../modal/ModalComponent.jsx';
import Clock from '../Clock.jsx';
import Autocomplete from '../Autocomplete.jsx';

const SmallPage = () => (
  <Page>
    <Wrapper>
      <Collapse text="hi!!"/>
      <SignUpDialog />
      <ModalComponent />
      <Clock />
      <Autocomplete />
    </Wrapper>
  </Page>
);

export default SmallPage;
