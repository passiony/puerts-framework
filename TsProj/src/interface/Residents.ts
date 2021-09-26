import {IConfig} from './IConfig';
//generate by Excel2Json tools,do not modify directly
	
export interface Residents extends IConfig{
	id:string;
	url:string;
	skill_id:Array<number>;
	ai_id:Array<number>;
	move_speed:number;
	hp:number;
	atk:number;
}
