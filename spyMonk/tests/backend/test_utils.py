import unittest
from utils import generate_nft_name

class TestUtils(unittest.TestCase):
    def test_generate_nft_name(self):
        nft_name = generate_nft_name()
        self.assertTrue(nft_name.startswith('NFT_'))
        self.assertTrue(len(nft_name) > 4)

if __name__ == '__main__':
    unittest.main()
