import './App.css';
import ButtonSync from './components/ButtonSync';
import Card from './components/Card';
import gmail from './assets/gmail.png';
import mailchimp from './assets/mailchimp.png';
import { groupContacts } from './data'
function App() {
  return (
    <div className="App">
      <Card explainText="These Gmail contacts will sync to Mailchimp" application="Gmail" logo={gmail} contacts={groupContacts}></Card>
      <ButtonSync />
      <Card explainText="These Gmail contacts will sync to Mailchimp" application="Mailchimp" logo={mailchimp}></Card>
    </div>
  );
}

export default App;
