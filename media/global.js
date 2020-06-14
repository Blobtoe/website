header = `

<div id="menu">
    <ul>
        <li><a href="">Weather</a></li>
        <li><a href="">Projects</a></li>
    </ul>
</div>

<style>
    #menu {
        background-color: #2b2b2b;
    }
    
    #menu ul {
        list-style-type: none;
        overflow: hidden;
        margin: 0;
        padding: 0;
    }

    #menu ul li {
        float: right;
    }

    #menu ul li a {
        color: whitesmoke;
        text-decoration: none;
        display: block;
        text-align: center;
        padding: 10px;
    }
</style>

`

$(document).ready(function () {
    $('#header').prepend(header);
  });