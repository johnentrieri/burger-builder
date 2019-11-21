import React, {Component} from 'react';
import Aux from '../../HOC/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            lettuce: 0,
            bacon: 0,
            cheese: 0,
            meat: 0            
        }
    }

    addIngredientHandler = (ingredient) => {
        const ingredients = {...this.state.ingredients};
        ingredients[ingredient] += 1;
        this.setState( { ingredients : ingredients});
    };

    removeIngredientHandler = (ingredient) => {
        const ingredients = {...this.state.ingredients};
        ingredients[ingredient] -= 1;
        this.setState( { ingredients : ingredients});
    };

    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    addHandler={this.addIngredientHandler}
                    removeHandler={this.removeIngredientHandler} >
                </BuildControls>
            </Aux>
        );
    }
}

export default BurgerBuilder;