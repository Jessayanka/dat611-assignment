//task1


function multiplyAll(numbers) {
    if (numbers.length === 0) return 0;
    return numbers.reduce((product, num) => product * num, 1);
}

function multiplyThrough(...args){
    return args.reduce((product, num) => product * num, 1);
}

console.log("The cumulative product of the numbers is:" + " "+ multiplyAll([8, 2, 5, 6]));
console.log("The product of the numbers is:" + " "+ multiplyThrough(8, 2, 5, 6));

//task2


async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        // 1. Map labels to Username and values to Latitude
        const chartData = data.map(u => ({
            index: u.username,               // Your Username variable
            value: parseFloat(u.address.geo.lat) // Your Latitude variable
        }));

        // 2. Render as a Bar Chart for clear distribution
        const surface = { name: 'User Geographic Distribution', tab: 'Charts' };
        
        // This will display the Usernames clearly on the bottom
        tfvis.render.barchart(surface, chartData, {
            xLabel: 'Username',
            yLabel: 'Latitude',
            height: 300
        });

        // 3. Keep the Table Logic here as well...
        const tableBody = document.getElementById('table-body');
        if (tableBody) {
            tableBody.innerHTML = data.map(user => `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.address.city}</td>
                    <td>${user.address.geo.lat}</td>
                </tr>`).join('');
        }
    } catch (error) {
        console.error("Chart rendering error:", error);
    }
}