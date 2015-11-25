// Ordering is important unless using an object factory.

if (false) {
    // Only Emily will have a fave: Wuthering Heights.
    require('./bucky');
    require('./emily');
}
else {
    // Both movie faves will be the same: Wuthering Heights.
    require('./emily');
    require('./bucky');
}