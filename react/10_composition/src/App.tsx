import {useState} from 'react';
import ContactCard from './components/ContactCard';
import ContactInfo from './components/ContactInfo';
import NamedChildren from './components/NamedChildren';

function App() {
	
	const [count,setCount] = useState(0)

  return (
    <>
		<ContactCard>
			<ContactInfo name="Matti Meikäläinen" profession="Koodari"/>
		</ContactCard>
		<ContactCard>
			<h2>Current count:{count}</h2>
			<button onClick={() => setCount(count => count+1)}>+</button>
		</ContactCard>
		<NamedChildren
			header={<h2>Header</h2>}
			media={<h3>Media Content</h3>}
			content={<h3>Content</h3>}/>
		<NamedChildren	
			header={<h2>No Media</h2>}
			content={<h3>Content</h3>}/>
    </>
  )
}

export default App
