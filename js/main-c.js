// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element
const ul = document.querySelector('ul');

const getFetchData = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

getFetchData('images.json').then(data => {
    for (let i = 0; i < data.length; i++) {
        const h3 = document.createElement('h3');
        h3.innerHTML = data[i].mediaTitle;

        const figCaption = document.createElement('figcaption');
        figCaption.appendChild(h3);

        const image = document.createElement('img');
        image.src = `img/thumbs/${data[i].mediaThumb}`;

        const link = document.createElement('a');
        link.href = `img/original/${data[i].mediaUrl}`;
        link.appendChild(image);

        const figure = document.createElement('figure');
        figure.appendChild(link);
        figure.appendChild(figCaption);

        const list = document.createElement('li');
        list.appendChild(figure);

        ul.appendChild(list);
    }
});