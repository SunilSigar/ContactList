var contactsArray = [
  {
    fname: 'Rohit', 
    lname: 'Choudhary',
    email: 'rohit@gmail.com',
    phone: '9996661234',
    image: 'pics/rohit.jpg'
  }, 
  {
    fname: 'Anurag',
    lname: 'Sharma',
    email: 'anurag@gmail.com',
    phone: '9998887779',
    image: 'pics/anurag.jpg'
  },
  {
    fname: 'Sonu',
    lname: 'Sigar',
    phone: '8889997774',
    email: 'sonu@gmail.com',
    image: 'pics/sonu.jpg'
  },
  {
    fname: 'Sourav',
    lname: 'Kundu',
    phone: '9988776655',
    email: 'sourav@gmail.com',
    image: 'pics/sourav.jpg'
  },
  {
    fname: 'Rohit',
    lname: 'Choudhary',
    email: 'rohit@gmail.com',
    phone: '9996661234',
    image: 'pics/rohit.jpg'
  }, 
  {
    fname: 'Anurag',
    lname: 'Sharma',
    email: 'anurag@gmail.com',
    phone: '9998887779',
    image: 'pics/anurag.jpg'
  },
  {
    fname: 'Sonu',
    lname: 'Sigar',
    phone: '8889997774',
    email: 'sonu@gmail.com',
    image: 'pics/sonu.jpg'
  },
  {
    fname: 'Sourav',
    lname: 'Kundu',
    phone: '9988776655',
    email: 'sourav@gmail.com',
    image: 'pics/sourav.jpg'
  },
  {
    fname: 'Rohit',
    lname: 'Choudhary',
    email: 'rohit@gmail.com',
    phone: '9996661234',
    image: 'pics/rohit.jpg'
  }, 
  {
    fname: 'Anurag',
    lname: 'Sharma',
    email: 'anurag@gmail.com',
    phone: '9998887779',
    image: 'pics/anurag.jpg'
  },
  {
    fname: 'Sonu',
    lname: 'Sigar',
    phone: '8889997774',
    email: 'sonu@gmail.com',
    image: 'pics/sonu.jpg'
  },
  {
    fname: 'Sourav',
    lname: 'Kundu',
    phone: '9988776655',
    email: 'sourav@gmail.com',
    image: 'pics/sourav.jpg'
  },
  {
    fname: 'Rohit',
    lname: 'Choudhary',
    email: 'rohit@gmail.com',
    phone: '9996661234',
    image: 'pics/rohit.jpg'
  }, 
  {
    fname: 'Anurag',
    lname: 'Sharma',
    email: 'anurag@gmail.com',
    phone: '9998887779',
    image: 'pics/anurag.jpg'
  },
  {
    fname: 'Sonu',
    lname: 'Sigar',
    phone: '8889997774',
    email: 'sonu@gmail.com',
    image: 'pics/sonu.jpg'
  },
  {
    fname: 'Sourav',
    lname: 'Kundu',
    phone: '9988776655',
    email: 'sourav@gmail.com',
    image: 'pics/sourav.jpg'
  },
  {
    fname: 'Yogesh',
    lname: 'Krishna',
    phone: '9966885577',
    email: 'yogesh@gmail.com',
    image: 'pics/yogesh.jpg'
  }
];

var MyContactList = React.createClass({
  getInitialState: function () {
     return {
       person: contactsArray[0]
     }
  },
  handleClick: function (contact) {
    this.setState({person: contact});
  },
  render: function () {
    return (
      <div className="app">
        <div className="left">
          <h2>Contact List</h2>
          <div className="contacts-container">
            {contactsArray.map(function(c){
                var imageStyles = {
                  backgroundImage: 'url(' + c.image + ')'
                };
                var contactStyles = {
                  backgroundColor: c === this.state.person ? '#46733E' : ''
                }
                return (
                  <div className="contact" onClick={this.handleClick.bind(this, c)} style={contactStyles}>
                    <span className="image" style={imageStyles}></span>
                    <span className="name">{c.fname} <br />
                        {c.email}</span>
                  </div>
                );
              }, this)}
          </div>
        </div>
        <div className="right">
          <ContactInfo person={this.state.person} />
        </div>
      </div>
    );
  }
});

var ContactInfo = React.createClass({
  render: function () {
    var styles = {
      backgroundImage: 'url(' + this.props.person.image + ')'
    }
    return (
      <div className="contact-info">
        <header>
          <div className="image" style={styles}></div>
          <h3 className="name">{this.props.person.fname +" "+ this.props.person.lname}</h3>
        </header>
        <section>
          <p className="phone">Phone: {this.props.person.phone}</p>
          <p className="email">Email: {this.props.person.email}</p>
        </section>
      </div>
    );
  }
});

React.render(
  <MyContactList />,
  document.body
);