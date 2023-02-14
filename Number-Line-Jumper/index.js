 const speedDef = v1 - v2;
    const startDef = x2 - x1;
    if (speedDef == 0) return 'NO';
    const intersection = startDef / speedDef;
    if (intersection > 0 && intersection%1 == 0) return 'YES';
    return 'NO';
