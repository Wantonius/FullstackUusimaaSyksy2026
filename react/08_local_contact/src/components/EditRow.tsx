import React,{useState} from 'react';
import Contact from '../models/Contact';

interface Props {
	contact:Contact;
	changeMode(mode:string,index:number):void;
	editContact(contact:Contact):void;
}

interface State {
	firstname:string;
	lastname:string;
	email:string;
	phone:string;
}

const EditRow = (props:Props) => {
	
	const [state,setState] = useState<State>({
		firstname:props.contact.firstname,
		lastname:props.contact.lastname,
		email:props.contact.email,
		phone:props.contact.phone
	})
	
	const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}
	
	const editContact = () => {
		const contact = new Contact(state.firstname,state.lastname,state.email,state.phone,props.contact.id);
		props.editContact(contact);
	}
	return(
		<tr>
			<td>
				<input type="text"
						name="firstname"
						id="firstname"
						onChange={onChange}
						className="form-control"
						value={state.firstname}/>
			</td>
			<td>
				<input type="text"
						name="lastname"
						id="lastname"
						onChange={onChange}
						className="form-control"
						value={state.lastname}/>
			</td>
			<td>
				<input type="email"
						name="email"
						id="email"
						onChange={onChange}
						className="form-control"
						value={state.email}/>
			</td>
			<td>
				<input type="tel"
						name="phone"
						id="phone"
						onChange={onChange}
						className="form-control"
						value={state.phone}/>
			</td>
			<td>
				<button className="btn btn-success" 
						onClick={editContact}>Save</button>
			</td>
			<td>
				<button className="btn btn-primary"
						onClick={() => props.changeMode("cancel",0)}>Cancel</button>
			</td>
		</tr>
	)
}

export default EditRow;