/* eslint-disable prettier/prettier */
export class CreateRecipeDto {
    users_id: number;
    name: string;
    image?: string;
    type: number;
    category: string;
    time: number;
    portions: number;
}
