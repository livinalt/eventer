// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "openzeppelin-contracts/contracts/token/ERC1155/ERC1155.sol";
import "openzeppelin-contracts/contracts/access/Ownable.sol";
/**
 * @title EventerToken
 * @dev This contract implements an ERC1155 token representing event tickets.
 */
contract EventerToken is ERC1155, Ownable {
    uint256 public constant EVENT_TICKET = 0;

    /**
     * @dev Constructor function
     * @param uri The base URI for token metadata.
     */
    constructor(string memory uri) ERC1155(uri) Ownable(msg.sender) {}

    /**
     * @dev Mints a single token and assigns it to an address.
     * @param to The address to receive the token.
     * @param id The token ID to mint.
     * @param amount The amount of tokens to mint.
     * @param data Additional data with no specified format.
     */
    function mint(address to, uint256 id, uint256 amount, bytes memory data) public onlyOwner {
        _mint(to, id, amount, data);
    }

    /**
     * @dev Mints multiple tokens and assigns them to an address.
     * @param to The address to receive the tokens.
     * @param ids The array of token IDs to mint.
     * @param amounts The array of amounts of tokens to mint for each ID.
     * @param data Additional data with no specified format.
     */
    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) public onlyOwner {
        _mintBatch(to, ids, amounts, data);
    }

    /**
     * @dev Burns a specific amount of a token from an account.
     * @param account The address owning the tokens to burn.
     * @param id The token ID to burn.
     * @param amount The amount of tokens to burn.
     */
    function burn(address account, uint256 id, uint256 amount) public onlyOwner {
        _burn(account, id, amount);
    }

    /**
     * @dev Burns multiple tokens from an account.
     * @param account The address owning the tokens to burn.
     * @param ids The array of token IDs to burn.
     * @param amounts The array of amounts of tokens to burn for each ID.
     */
    function burnBatch(address account, uint256[] memory ids, uint256[] memory amounts) public onlyOwner {
        _burnBatch(account, ids, amounts);
    }
}
