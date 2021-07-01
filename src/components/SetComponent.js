import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { CARDS } from '../shared/cards';


class Set extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: CARDS,
      set: 'none',
      type: 'none',
      ownedCards: [],
      owned: false
    };
    
    this.setSetFilter = this.setSetFilter.bind(this);
    this.setTypeFilter = this.setTypeFilter.bind(this);
    this.setOwned = this.setOwned.bind(this);
    this.toggleOwned = this.toggleOwned.bind(this);
  }
  
  setSetFilter(set) {
    this.setState(prevState => ({
      set: set
    }));
  }
    
  setTypeFilter(type) {
    this.setState(prevState => ({
      type: type
    }));
  }
  
  setOwned() {
    this.setState(prevState => ({
      owned: !prevState.owned
    }));
  }
  
  toggleOwned(id) {
    let ownedCards = [...this.state.ownedCards];
    const index = ownedCards.indexOf(parseInt(id, 10));
    
    if (index > -1) {
      ownedCards.splice(index,1);
      this.setState(prevState => ({
        ownedCards: ownedCards
      }));
    } else {
      ownedCards.push(parseInt(id, 10));
      this.setState(prevState => ({
        ownedCards: ownedCards
      }));
    }
    
  }
  
  render() {
    
    const renderButtonText = (id) => {
      if(this.state.ownedCards.includes(id))
        return 'owned';
      else
        return 'not owned';
    }
   
    const RenderCardItem = ({item}) => {
        return (
            <Card>
              <CardImg src={item.image} alt={item.name} />
              <CardBody>
              <CardTitle>{item.name}</CardTitle>
              <CardText>{item.description}</CardText>
              <Button variant="primary" value={item.id} onClick={e => this.toggleOwned(e.target.value)}>
                {renderButtonText(item.id)}
              </Button>
              </CardBody>
          </Card>
        );
    }
    
    const setFilter = this.props.cards.filter((card) => (this.state.set === 'none') || (card.set === this.state.set))
    const typeFilter = setFilter.filter((card) => (this.state.type === 'none') || (card.type === this.state.type))
    const ownedFilter = typeFilter.filter((card) => (!this.state.owned) || (this.state.ownedCards.includes(card.id)))
    
    const renderedCards = ownedFilter.map((card) => {
            return (
                <div className="col-12 col-md-3 m-1"  key={card.id}>
                    <RenderCardItem item={card} />
                </div>
            );
        });
    
     return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Cards</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h4>Filter Set:</h4>
                        <Button variant="primary" value='none' onClick={e => this.setSetFilter(e.target.value)}>
                          none
                        </Button>
                        <Button variant="primary" value='TOCH' onClick={e => this.setSetFilter(e.target.value)}>
                          Toon Chaos
                        </Button>
                        <Button variant="primary" value='BLVO' onClick={e => this.setSetFilter(e.target.value)}>
                          Blazing Vortex
                        </Button>
                        <Button variant="primary" value='GEIM' onClick={e => this.setSetFilter(e.target.value)}>
                          Genesis Impact
                        </Button>
                        <hr />
                    </div>
                    <div className="col-12">
                        <h4>Filter Card Type:</h4>
                        <Button variant="primary" value='none' onClick={e => this.setTypeFilter(e.target.value)}>
                          none
                        </Button>
                        <Button variant="primary" value='monster' onClick={e => this.setTypeFilter(e.target.value)}>
                          Monster Cards
                        </Button>
                        <Button variant="primary" value='spell' onClick={e => this.setTypeFilter(e.target.value)}>
                          Spell Cards
                        </Button>
                        <Button variant="primary" value='trap' onClick={e => this.setTypeFilter(e.target.value)}>
                          Trap Cards
                        </Button>
                        <hr />
                    </div>
                    <div className="col-12">
                        <h4>Toggle Show only owned cards:</h4>
                        <Button variant="primary" value='none' onClick={this.setOwned}>
                          toggle
                        </Button>
                        <hr />
                    </div>                    
                    <div className="col-12">
                        <h3>Cards</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {renderedCards}
                </div>
            </div>
        );
  }
}

export default Set;