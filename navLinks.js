const authRoutes = [
    { href: "/products/new", title: "New Item" },
    { href: "/reviews", title: "Reviews" },
    { href: "/logout", title: "Logout" },
    { href: "/cart", title: "Cart"},
];

const loginRoutes = [
    { href: "/login", title: "Login" },
    { href: "/login/register", title: "Register" },
];


let navLinks = function nav(req,res,next) {
    if (req.session.currentUser){
        res.locals.routes = authRoutes;
    } else {
        res.locals.routes = loginRoutes
    }
}

module.exports = navLinks;