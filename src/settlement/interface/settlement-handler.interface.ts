

export interface IsettlementHandler{ 
  settle(round_id: string,data?:any): Promise<void>;
  getGameName():string; 
}