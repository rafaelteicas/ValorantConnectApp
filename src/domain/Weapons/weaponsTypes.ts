export type WeaponsTypesAPI = {
  uuid: string; // '63e6c2b6-4a8e-869c-3d4c-e38355226584';
  displayName: string; // 'Odin';
  category: string; //'EEquippableCategory::Heavy';
  defaultSkinUuid: string; // 'f454efd1-49cb-372f-7096-d394df615308';
  displayIcon: string; // 'https://media.valorant-api.com/weapons/63e6c2b6-4a8e-869c-3d4c-e38355226584/displayicon.png';
  killStreamIcon: string; // 'https://media.valorant-api.com/weapons/63e6c2b6-4a8e-869c-3d4c-e38355226584/killstreamicon.png';
  assetPath: string; // 'ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/HMGPrimaryAsset';
  weaponStats: {
    fireRate: number; // 12;
    magazineSize: number; // 100;
    runSpeedMultiplier: number; // 0.76;
    equipTimeSeconds: number; //1.25;
    reloadTimeSeconds: number; // 5;
    firstBulletAccuracy: number; // 0.8;
    shotgunPelletCount: number; // 1;
    wallPenetration: string; // 'EWallPenetrationDisplayType::High';
    feature: string; // 'EWeaponStatsFeature::ROFIncrease';
    fireMode: any; // null;
    altFireType: string; //'EWeaponAltFireDisplayType::ADS';
    adsStats: {
      zoomMultiplier: number; // 1.15;
      fireRate: number; // 15.6;
      runSpeedMultiplier: number; // 0.76;
      burstCount: number; // 1;
      firstBulletAccuracy: number; // 0.79;
    };
    altShotgunStats: any; // null;
    airBurstStats: any; // null;
    damageRanges: [
      {
        rangeStartMeters: number; // 0;
        rangeEndMeters: number; //  30;
        headDamage: number; //  95;
        bodyDamage: number; //  38;
        legDamage: number; //  32.3;
      },
      {
        rangeStartMeters: number; // 30;
        rangeEndMeters: number; // 50;
        headDamage: number; //77.5;
        bodyDamage: number; // 31;
        legDamage: number; //26.35;
      },
    ];
  };
  shopData: {
    cost: number; // 3200;
    category: string; // 'Heavy Weapons';
    categoryText: string; // 'Heavy Weapons';
    gridPosition: {
      row: number; // 2;
      column: number; //2;
    };
    canBeTrashed: boolean; // true;
    image: any; // null;
    newImage: string; // 'https://media.valorant-api.com/weapons/63e6c2b6-4a8e-869c-3d4c-e38355226584/shop/newimage.png';
    newImage2: any; // null;
    assetPath: string; //'ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/HeavyMachineGunPurchase';
  };
};

export type WeaponsTypes = {
  uuid: string;
  name: string;
  image: string;
};

export type WeaponsByUuidAPI = {
  uuid: string;
  displayName: string;
  category: string;
  defaultSkinUuid: string;
  displayIcon: string;
  killStreamIcon: string;
  assetPath: string;
  weaponStats: {
    fireRate: string;
    magazineSize: number;
    runSpeedMultiplier: string;
    equipTimeSeconds: string;
    reloadTimeSeconds: string;
    firstBulletAccuracy: string;
    shotgunPelletCount: number;
    wallPenetration: string;
    feature: string;
    fireMode: string;
    altFireType: string;
    adsStats: {
      zoomMultiplier: string;
      fireRate: string;
      runSpeedMultiplier: string;
      burstCount: number;
      firstBulletAccuracy: string;
    };
    altShotgunStats: {
      shotgunPelletCount: number;
      burstRate: string;
    };
    airBurstStats: {
      shotgunPelletCount: number;
      burstDistance: string;
    };
    damageRanges: {
      rangeStartMeters: string;
      rangeEndMeters: string;
      headDamage: string;
      bodyDamage: string;
      legDamage: string;
    };
  };
  shopData: {
    cost: number;
    category: string;
    categoryText: string;
    gridPosition: {
      row: number;
      column: number;
    };
    canBeTrashed: boolean;
    image: string;
    newImage: string;
    newImage2: string;
    assetPath: string;
  };
  skins: Array<SkinTypesAPI>;
};

export type SkinTypes = {
  uuid: string;
  name: string;
  image: string;
  cost?: number;
};

export type SkinTypesAPI = {
  uuid: string;
  displayName: string;
  themeUuid: string;
  contentTierUuid: string;
  displayIcon: string;
  wallpaper: string;
  assetPath: string;
  chromas: {
    uuid: string;
    displayName: string;
    displayIcon: string;
    fullRender: string;
    swatch: string;
    streamedVideo: string;
    assetPath: string;
  };
  levels: {
    uuid: string;
    displayName: string;
    levelItem: string;
    displayIcon: string;
    streamedVideo: string;
    assetPath: string;
  };
};
