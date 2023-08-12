function isMultiple(num) {
        if (!Number.isInteger(num)) return;
        if (num % 3 === 0 || num % 5 === 0) {
                return true;
        } else {
                return false;
        }
}

function rangeSequenceBelow(max) {
        const range = Array(max)
                .fill()
                .map((_, i) => i);
        return range;
}

function getAllMultiples(max) {
        const multiples = rangeSequenceBelow(max).map((num) => {
                if (isMultiple(num)) {
                        return num;
                } else {
                        return null;
                }
        });
        return multiples.filter(Boolean);
}

function getSum(array) {
        const sum = array.reduce((acc, next) => acc + next, 0);
        return sum;
}

function multiplesOf3and5(num) {
        const sumAll = getSum(getAllMultiples(num));
        return sumAll;
}

multiplesOf3and5(1000);
