interface DataType {
  uuid: string;
  assetObjectName: string;
  tiers: TierAPI[];
  assetPath: string;
}

export interface ElosAPI {
  data: DataType[];
}

export interface TierAPI {
  tier: number;
  tierName: string;
  division: string;
  divisionName: string;
  color: string;
  backgroundColor: string;
  smallIcon: string;
  largeIcon: string;
  rankTriangleDownIcon: string;
  rankTriangleUpIcon: string;
}

export interface Elos {
  icon: string;
  name: string;
}
