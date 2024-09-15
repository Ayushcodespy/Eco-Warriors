// Show Create Team Form
document.getElementById('createTeamBtn').addEventListener('click', function() {
    document.getElementById('createTeamForm').style.display = 'block';
    document.getElementById('joinTeamForm').style.display = 'none';
});

// Show Join Team Form
document.getElementById('joinTeamBtn').addEventListener('click', function() {
    document.getElementById('joinTeamForm').style.display = 'block';
    document.getElementById('createTeamForm').style.display = 'none';
});

// Function to handle team creation
document.getElementById('teamForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const teamName = document.getElementById('teamName').value;
    const teamDescription = document.getElementById('teamDescription').value;
    const teamMembers = document.getElementById('teamMembers').value;
    const teamGoal = document.getElementById('teamGoal').value;

    // Create a new team card
    const teamCard = document.createElement('div');
    teamCard.className = 'team-card';
    teamCard.innerHTML = `
        <h2>${teamName}</h2>
        <p><strong>Description:</strong> ${teamDescription}</p>
        <p><strong>Members:</strong> ${teamMembers}</p>
        <p><strong>Goals:</strong> ${teamGoal}</p>
        <button onclick="viewTeamDetails('${teamName}', '${teamDescription}', ${teamMembers}, '${teamGoal}')">View Details</button>
    `;

    // Append the new team card to the team container
    document.getElementById('teamContainer').appendChild(teamCard);

    // Clear the form fields
    document.getElementById('teamForm').reset();
});

// Function to handle joining a team
document.getElementById('joinForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const teamCode = document.getElementById('teamCode').value;
    alert(`You have joined the team with code: ${teamCode}`);
    // Here you can implement further logic to handle joining a team
});

// Function to view team details
function viewTeamDetails(teamName, teamDescription, teamMembers, teamGoal) {
    alert(`Team Name: ${teamName}\nDescription: ${teamDescription}\nMembers: ${teamMembers}\nGoals: ${teamGoal}`);
}
