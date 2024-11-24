function transformAssets(assets) {
  // Create a map to store assets by their IDs for quick lookup
  const assetMap = {};

  // Transform the flat array into a map and add the `key` field
  for (const asset of assets) {
    assetMap[asset.id] = {
      ...asset,
      key: asset.id.toString(),
      children: [],
    };
  }
  // Prepare the result array
  const nestedAssets = [];

  // Build the nested structure
  for (const asset of assets) {
    const currentAsset = assetMap[asset.id];

    if (asset.parent === null) {
      // Top-level assets
      nestedAssets.push(currentAsset);
    } else {
      // Child assets
      console.log({  currentAsset });
      const parentAsset = assetMap[asset.parent];
      if (parentAsset) {
        currentAsset.key = `${parentAsset.key}|${currentAsset.id}`;
        parentAsset.children?.push(currentAsset);
      }

      console.log(JSON.stringify(parentAsset, null, 2));
      console.log(
        "============================================================"
      );
    }
  }

  return nestedAssets;
}

const assets = [
  {
    id: 357,
    name: "Filteration System FS-002",
    code: "24014109",
    description: "",
    parent: null,
    isParent: true,
  },
  {
    id: 419,
    name: "Shaft Fan SF-002",
    code: "ase-beta-ri-002-ph-li-001-002-eu-002-su-004-co-003",
    description: null,
    parent: 403,
    isParent: true,
  },
  {
    id: 437,
    name: "Bearing Fan DE BFD-002",
    code: "ase-beta-ri-002-ph-li-001-002-eu-002-su-004-co-003-pa-009",
    description: null,
    parent: 419,
    isParent: false,
  },

  {
    id: 360,
    name: "Recirculation Container RC-002",
    code: "ase-alpha-**-***-001-ph-li-002-001-su-003",
    description: "hello..",
    parent: 357,
    isParent: false,
  },
  {
    id: 361,
    name: "Fluid Container FC-002",
    code: "ase-alpha-**-***-001-ph-li-002-001-su-004",
    description: "fadsf",
    parent: 357,
    isParent: false,
  },
  {
    id: 403,
    name: "Axial Fan AF-002",
    code: "ase-beta-ri-002-ph-li-001-002-eu-001-su-001",
    description: null,
    parent: 357,
    isParent: true,
  },
  {
    id: 438,
    name: "Bearing Fan NDE BFN-002",
    code: "ase-beta-ri-002-ph-li-001-002-eu-002-su-004-co-003-pa-010",
    description: null,
    parent: 419,
    isParent: false,
  },
  {
    id: 439,
    name: "Fan Blades FB-002",
    code: "ase-beta-ri-002-ph-li-001-002-eu-002-su-004-co-003-pa-011",
    description: null,
    parent: 419,
    isParent: false,
  },
  {
    id: 455,
    name: "Air Conditioner AC-002",
    code: "ase-gamma-**-***-ph-li-001-002",
    description: "qasdsdadasddsdaasdadasddddddd123123",
    parent: null,
    isParent: false,
  },
  {
    id: 481,
    name: "Air Conditioner AC-001",
    code: "ase-gamma-**-***-ph-li-001-001",
    description: null,
    parent: null,
    isParent: false,
  },
  {
    id: 507,
    name: "Refrigerator R-001",
    code: "ase-delta-ri-009-ph-eu-001-001",
    description: null,
    parent: null,
    isParent: false,
  },
];

const nestedAssets = transformAssets(assets);
console.log(JSON.stringify(nestedAssets, null, 2));
