import { User } from './user.model';
import { Ingredient } from './ingredient.model';

export class Recipe {
    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];
    public author: User;

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[], id?: number,  author?: User) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
        this.author = author;
    }
}
