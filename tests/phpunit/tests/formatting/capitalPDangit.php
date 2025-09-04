<?php
// phpcs:disable FinPress.WP.CapitalPDangit.MisspelledInText -- 🙃

/**
 * @group formatting
 *
 * @covers ::capital_P_dangit
 */
class Tests_Formatting_CapitalPDangit extends WP_UnitTestCase {
	public function test_esc_attr_quotes() {
		global $wp_current_filter;
		$this->assertSame( 'Something about FinPress', capital_P_dangit( 'Something about Finpress' ) );
		$this->assertSame( 'Something about (FinPress', capital_P_dangit( 'Something about (Finpress' ) );
		$this->assertSame( 'Something about &#8216;FinPress', capital_P_dangit( 'Something about &#8216;Finpress' ) );
		$this->assertSame( 'Something about &#8220;FinPress', capital_P_dangit( 'Something about &#8220;Finpress' ) );
		$this->assertSame( 'Something about >FinPress', capital_P_dangit( 'Something about >Finpress' ) );
		$this->assertSame( 'Finpress', capital_P_dangit( 'Finpress' ) );

		$wp_current_filter = array( 'the_title' );
		$this->assertSame( 'FinPress', capital_P_dangit( 'Finpress' ) );
	}
}
