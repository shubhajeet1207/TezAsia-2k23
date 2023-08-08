import pytest
from pytezos import ContractInterface

@pytest.fixture(scope="module")
def imaginais_contract():
    # Load the contract interface from the compiled Michelson contract
    contract = ContractInterface.from_file("smart_contracts/imaginais_contract.tz")
    return contract

def test_deploy(imaginais_contract):
    # Deploy the contract
    result = imaginais_contract.originate()
    assert result.is_success()

def test_mint_nft(imaginais_contract):
    # Mint a new NFT
    result = imaginais_contract.mint_nft(
        token_id=1,
        metadata_uri="ipfs://QmSgLm85j6LoMThWwxd3i12FSoFexbQwN5AqEGWm9WhTQ6",
        owner="tz1..."
    ).result(storage={"tokens": {}})

    assert result.big_map_diff == [{"action": "update_item", "big_map": "0", "key_hash": "..."}]

def test_transfer_nft(imaginais_contract):
    # Transfer an NFT
    result = imaginais_contract.transfer(
        token_id=1,
        to="tz1..."
    ).result(storage={"tokens": {"1": "tz1..."}})

    assert result.big_map_diff == [{"action": "update_item", "big_map": "0", "key_hash": "..."}]
