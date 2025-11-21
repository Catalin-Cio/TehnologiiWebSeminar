function deepClone(value, seen = new Map()) {
    if (value === null || typeof value !== "object") return value;
    if (seen.has(value)) return seen.get(value);
    if (Array.isArray(value)) {
        const clone = [];
        seen.set(value, clone);
        for (let item of value) clone.push(deepClone(item, seen));
        return clone;
    }
    if (value instanceof Date) return new Date(value.getTime());
    if (value instanceof Map) {
        const clone = new Map();
        seen.set(value, clone);
        for (let [k, v] of value.entries()) clone.set(deepClone(k, seen), deepClone(v, seen));
        return clone;
    }
    if (value instanceof Set) {
        const clone = new Set();
        seen.set(value, clone);
        for (let v of value) clone.add(deepClone(v, seen));
        return clone;
    }
    const clone = {};
    seen.set(value, clone);
    for (let key in value) clone[key] = deepClone(value[key], seen);
    return clone;
}

const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);

copy.b.c = 100;

console.log("original:", original);
console.log("copy:", copy);
