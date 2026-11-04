import {useState} from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Contact from './models/Contact';
import Navbar from './components/Navbar';
import {Routes,Route,Navigate} from 'react-router';

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
	
	const removeContact = (id:number) => {
		setState((state) => {
			const tempList = state.list.filter(contact => contact.id !== id);
			return {
				...state,
				list:tempList
			}
		})
	}
	
	const editContact = (contact:Contact) => {
		for(let i=0;i<state.list.length;i++) {
			if(contact.id === state.list[i].id) {
				setState((state) => {
					const tempList = state.list.toSpliced(i,1,contact);
					return {
						...state,
						list:tempList
					}
				})
			}
		}
	}

	return (
		<>
			<Navbar/>
			<hr/>
			<Routes>
				<Route path="/" element={<ContactList list={state.list} removeContact={removeContact} editContact={editContact}/>}/>
				<Route path="/form" element={<ContactForm addContact={addContact}/>}/>
				<Route path="*" element={<Navigate to="/"/>}/>
			</Routes>
		</>
	)
}

export default App
