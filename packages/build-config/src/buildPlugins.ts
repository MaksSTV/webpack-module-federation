import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { Configuration, DefinePlugin } from "webpack"
import { BuildOptions } from './types/types'
//import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"

export function buildPlugins({ paths, platform }: BuildOptions): Configuration['plugins'] {
	return [
		new HtmlWebpackPlugin({
			template: paths.html,
			publicPath: '/'
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new DefinePlugin({
			__PLATFORM__: JSON.stringify(platform),
		}),
		//new ForkTsCheckerWebpackPlugin(),
		new ReactRefreshWebpackPlugin()
	]
}