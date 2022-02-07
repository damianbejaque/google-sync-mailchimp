import './App.css';
import ButtonSync from './components/ButtonSync';
import Card from './components/Card';
import gmail from './assets/gmail.png';
import mailchimp from './assets/mailchimp.png';
import { groupContactsGmail } from './data'
import { groupContactsMailChimp } from './data'
function App() {
  return (
    <div className="App">
      <Card explainText="These Gmail contacts will sync to Mailchimp" application="Gmail" logo={gmail} contacts={groupContactsGmail}></Card>
      <ButtonSync />
      <Card explainText="These Mailchimp contacts will sync to Gmail" application="Mailchimp" logo={mailchimp} contacts={groupContactsMailChimp}></Card>
    </div>
  );
}

export default App;
