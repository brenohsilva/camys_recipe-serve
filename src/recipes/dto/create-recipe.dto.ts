/* eslint-disable prettier/prettier */
export class CreateRecipeDto {
    users_id: number;
    name: string;
    image?: string;
    description?: string;
    type: number;
    time: number;
    portions: number;
}
