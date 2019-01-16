let imageFilepath = 'http://demos.themes.guide/bodeo/assets/images/users/';

const getState = (scope) => {
    return {
        store: {
            contacts: [/*
                {
                    name: "John Smith",
                    address: "2221 Biscayne Blvd.",
                    email: "jsmith@gmail.com",
                    phone: "773-598-0031",
                    image: imageFilepath + "m101.jpg"
                },
                {
                    name: "Jennifer Johnson",
                    address: "1283 Bayshore Dr.",
                    email: "jjohnson@gmail.com",
                    phone: "305-432-7492",
                    image: imageFilepath + "w100.jpg"
                },
                {
                    name: "Darrin Packer",
                    address: "2213 Elm St.",
                    email: "dpacker@gmail.com",
                    phone: "321-643-7666",
                    image: imageFilepath + "m102.jpg"
                },
                {
                    name: "Leo Goldstein",
                    address: "4333 Testing Ave.",
                    email: "lgoldstein@gmail.com",
                    phone: "994-049-3211",
                    image: imageFilepath + "m103.jpg"
                },
                {
                    name: "Carolyn Spence",
                    address: "788 Lakesmith Ct.",
                    email: "cspence@gmail.com",
                    phone: "213-555-7721",
                    image: imageFilepath + "w102.jpg"
                }    */                
                ]
        },
        actions: {
			updateContact: (history, APIid, name, email, phone, address) => {
				let store = scope.state.store;
				/*
				store.contacts[index].name = name;
				store.contacts[index].email = email;
				store.contacts[index].phone = phone;
				store.contacts[index].address = address;
				scope.setState({ store });
				*/
				
            fetch("https://assets.breatheco.de/apis/fake/contact/" + APIid, {
                method: 'POST',
                headers: {
                  "Content-type": "application/json;charset=utf-8"
                },
                body:   JSON.stringify({
                        "full_name": name,
                        "email": email,
                        "agenda_slug": "downtown_vi",
                        "address": address,
                        "phone": phone
                })
              })
              .then(response => response.json())
              //.then(myJson => alert(JSON.stringify(myJson)))
              .then(getUpdatedData => {
                  fetch('https://assets.breatheco.de/apis/fake/contact/agenda/downtown_vi')
                  .then(response => response.json())
                   // .then(myJson => alert(JSON.stringify(myJson))
                  .then(data => {
                      let store = scope.state.store;
                      store.contacts = data;
                      scope.setState({ store });
                    })
                    
                  .then(update => {
                      history.push('/');
                  });
              })

              .catch(error => {
                    alert(error);
              });             
				
				
			},
			addContact: (history, index, name, email, phone, address) => {
				let store = scope.state.store;
				let newContact = {
                name: name,
                address: address,
                email: email,
                phone: phone,
                image: "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Robot-512.png"
				};
                store.contacts.push(newContact);
				scope.setState({ store });
				history.push('/');
			},
			deleteContact: (history, index, close) => {
				let store = scope.state.store;
                store.contacts.splice(index, 1);
				scope.setState({ store });
				close;
				history.push('/');
			}			
        }
    };
};

export default getState;

