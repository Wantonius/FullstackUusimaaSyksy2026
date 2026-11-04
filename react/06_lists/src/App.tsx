import {useState} from 'react';
import ContactForm from './components/ContactForm';
import Contact from './models/Contact';

interface State {
	list:Contact[];
	id:number;
}

function App() {
  
	const [state,setState] = useState<State>({
		list:[],
		id:100
	})
	
	const addContact = (contact:Contact) => {
		setState((state) => {
			contact.id = state.id;
			return {
				list:state.list.concat(contact),
				id:state.id+1
			}
		})
	}

	return (
		<>
			<ContactForm addContact={addContact}/>
		</>
	)
}

export default App
