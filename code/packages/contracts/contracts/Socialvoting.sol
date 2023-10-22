// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingContract {
    // Struct to represent a social issue for voting
    struct SocialIssue {
        string title;
        string description;
        uint256 yesVotes;
        uint256 noVotes;
        bool isOpen;
    }

    // Mapping to store social issues by a unique ID
    mapping(uint256 => SocialIssue) public socialIssues;
    uint256 public totalIssues;

    // Mapping to track user votes for social issues
    mapping(address => mapping(uint256 => bool)) public userVotes;

    // Event to notify when a user casts a vote
    event Voted(address indexed user, uint256 issueId, bool inSupport);

    constructor() {
        totalIssues = 0;
    }

    // Function to create a new social issue
    function createSocialIssue(string memory _title, string memory _description) public {
        totalIssues++;
        socialIssues[totalIssues] = SocialIssue({
            title: _title,
            description: _description,
            yesVotes: 0,
            noVotes: 0,
            isOpen: true
        });
    }

    // Function to vote on a social issue
    function vote(uint256 _issueId, bool _inSupport) public {
        require(_issueId <= totalIssues && _issueId > 0, "Invalid issue ID");
        require(socialIssues[_issueId].isOpen, "Voting for this issue is closed");
        require(!userVotes[msg.sender][_issueId], "You have already voted on this issue");

        if (_inSupport) {
            socialIssues[_issueId].yesVotes++;
        } else {
            socialIssues[_issueId].noVotes++;
        }

        userVotes[msg.sender][_issueId] = true;
        emit Voted(msg.sender, _issueId, _inSupport);
    }

    // Function to close voting on a social issue
    function closeVoting(uint256 _issueId) public {
        require(_issueId <= totalIssues && _issueId > 0, "Invalid issue ID");
        socialIssues[_issueId].isOpen = false;
    }

    // Function to get the vote results for a social issue
    function getVoteResults(uint256 _issueId) public view returns (uint256 yesVotes, uint256 noVotes) {
        require(_issueId <= totalIssues && _issueId > 0, "Invalid issue ID");
        return (socialIssues[_issueId].yesVotes, socialIssues[_issueId].noVotes);
    }
}
