1. Why is it important to put thought into your IDs & Classes when it comes to technology intersections? (e.g. how HTML, CSS, and JS intersect)
- Because CSS and JS depend on them for styling and behaivor and therefore a clear and intuitive pattern allows for easy debugging, and cleaner coding 
2. What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?
- Data attribures are custom HTML attributes and they are useful since you can store extra info through them. It keeps HTML and JS cleaner. Microdata is meant for semantic meaning and having the web understand the content and data attributes (data-x) is more for app logic. 
3. What is a DOM fragment? Why are they powerful?
- DOM fragment is  temporary container for DOM nodes to speed up performance. It is powerful since it increases speed, and allows for clean updates.  
4. What is the point of a “Virtual DOM”? What do you gain? What do you lose?
- Virtual DOM is a copy of the real DOM kept in memory that is updated first. You gain performance improvement and smoother UI updates while losing some of the abstraction, and less direct control. 
5. In JavaScript, usually you can reference every attribute of an element with a dot selector followed by the attribute name, except for the class attribute, which is className. Why is this so?
- This is because class is a reserved keyword in JS. 
6. What is the difference between using addEventListener() and something like onClick() ? What are the advantages / disadvantages of both?
- onClick is simple and easy to read but it is less flexible and there is only one handler allowed. addEventListener allows for multiple listeners to the same event and gives the developer more control. However, it is wordier and perhaps less intuivite.  
