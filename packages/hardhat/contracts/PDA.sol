// Solidity program to
// demonstrate adding
// values to mapping
pragma solidity ^0.8.4;

// Creating contract
contract pda_contract{

		struct DisputeStruct {
			address disputed;
			address disputer;
			address concernedGouvernance;
			string msg;
			bool resolved;
		}

		struct ReportStruct {
			address reported;
			address reporter;
			address concernedGouvernance;
			string msg;
			bool resolved;
		}
	
		mapping(address => DisputeStruct[]) public disputes;
		mapping(address => ReportStruct[]) public reports;
	
		function addDispute(address _disputed, address _concernedGouvernance, string memory _msg) public {
			disputes[_disputed].push(DisputeStruct(_disputed, msg.sender, _concernedGouvernance, _msg, false));
		}
		
		function addReport(address _reported, address _concernedGouvernance, string memory _msg) public {
			reports[_reported].push(ReportStruct(_reported, msg.sender, _concernedGouvernance, _msg, false));
		}

		function getDisputes(address _address) public view returns (DisputeStruct[] memory) {
			return disputes[_address];
		}

		function getTotalDisputes(address _address) public view returns (uint256 totalDisputes, uint256 totalResolved) {
			uint256 count = disputes[_address].length;
			uint256 resolvedCount = 0;
	
			for (uint256 i = 0; i < count; i++) {
				if (disputes[_address][i].resolved) {
					resolvedCount++;
				}
			}
		}

		function getReports(address _address) public view returns (DisputeStruct[] memory) {
				return disputes[_address];
			}
	
		function getTotalReports(address _address) public view returns (uint256, uint256) {
			uint256 count = reports[_address].length;
			uint256 resolvedCount = 0;
		
			for (uint256 i = 0; i < count; i++) {
				if (reports[_address][i].resolved) {
					resolvedCount++;
				}
			}
	
		return (count, resolvedCount);
		}
}
