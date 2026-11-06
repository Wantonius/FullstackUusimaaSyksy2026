import {useState,useEffect} from 'react';
import ShoppingItem from '../models/ShoppingItem';

interface State {
	list:ShoppingItem[];
}

interface UrlRequest {
	request:Request;
	action:string;
}

const useAction = ():{state:State,
						add:(item:ShoppingItem) => void,
						remove:(id:string) => void,
						edit:(item:ShoppingItem) => void} => {

	const [state,setState] = useState<State>({
		list:[]
	})
	
	const [urlRequest,setUrlRequest] = useState<UrlRequest>({
		request:new Request("",{}),
		action:""
	})
	
	useEffect(() => {
		getList();
	},[]);
	
	useEffect(() => {
		
		const fetchData = async () => {
			const response = await fetch(urlRequest.request);
			if(!response) {
				console.log("No response from the server");
				return;
			}
			if(response.ok) {
				switch(urlRequest.action) {
					case "getlist": {
						const temp = await response.json();
						if(!temp) {
							console.log("Failed to parse shopping items");
							return;
						}
						const list = temp as ShoppingItem[];
						setState({
							list:list
						})
						return;
					}
					case "additem":
					case "removeitem":
					case "edititem": {
						getList();
						return
					}
					default: {
						return;
					}
				}	
			} else {
				console.log("Server responded with a status "+response.status+" "+response.statusText);
			}
		}
		
		fetchData();
		
	},[urlRequest]);

	const getList = () => {
		setUrlRequest({
			request:new Request("/api/shopping"),
			action:"getlist"
		})
	}
	
	const add = (item:ShoppingItem) => {
		setUrlRequest({
			request:new Request("/api/shopping",{
				method:"POST",
				headers:{
					"Content-Type":"application/json"
				},
				body:JSON.stringify(item)
			}),
			action:"additem"
		})
	}
	
	const remove = (id:string) => {
		setUrlRequest({
			request:new Request("/api/shopping/"+id,{
				method:"DELETE"
			}),
			action:"removeitem"
		})
	}
	
	const edit = (item:ShoppingItem) => {
		setUrlRequest({
			request:new Request("/api/shopping/"+item._id,{
				method:"PUT",
				headers:{
					"Content-Type":"application/json"
				},
				body:JSON.stringify(item)
			}),
			action:"edititem"
		})
	}
	
	return {state,add,remove,edit}
}